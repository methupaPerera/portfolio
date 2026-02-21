"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import submitContact from "@/actions/submit-email";
import ReCAPTCHA from "react-google-recaptcha";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { IoIosSend } from "react-icons/io";
import { LoaderFive } from "../ui/loader";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function ContactForm({
	status,
}: {
	status: string | undefined;
}) {
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const searchParams = useSearchParams();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);

		try {
			const form = e.currentTarget;
			const formData = new FormData(form);
			const token = await recaptchaRef.current?.executeAsync();

			if (!token) {
				return;
			}

			formData.set("token", token);

			await submitContact(formData);
		} finally {
			recaptchaRef.current?.reset();
			setLoading(false);
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-slate-900 space-y-4 border border-muted/5 p-6 rounded-2xl shadow-[0_0_10px] shadow-primary/20"
		>
			<ReCAPTCHA
				sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
				ref={recaptchaRef}
				size="invisible"
			/>
			<p className="text-xl font-semibold">Send a Message</p>
			<div className="flex gap-4">
				<div className="w-full space-y-1">
					<label
						htmlFor="name"
						className="text-sm text-muted-foreground"
					>
						Name
					</label>

					<Input
						id="name"
						type="text"
						name="name"
						placeholder="Your name"
						required
						className="mt-1"
					/>
				</div>

				<div className="w-full space-y-1">
					<label
						htmlFor="email"
						className="text-sm text-muted-foreground"
					>
						Email
					</label>

					<Input
						id="email"
						type="email"
						name="email"
						placeholder="Your email"
						required
						className="mt-1"
					/>
				</div>
			</div>
			<div className="space-y-1">
				<label
					htmlFor="subject"
					className="text-sm text-muted-foreground"
				>
					Subject
				</label>

				<Input
					id="subject"
					type="text"
					name="subject"
					placeholder="Subject"
					required
					className="mt-1"
				/>
			</div>
			<div className="space-y-1">
				<label
					htmlFor="message"
					className="text-sm text-muted-foreground"
				>
					Message
				</label>

				<Textarea
					id="message"
					name="message"
					placeholder="Your message"
					rows={4}
					required
					className="mt-1"
				/>
			</div>

			{status === "success" && (
				<div className="flex items-center  gap-1 rounded-lg bg-green-500/10 border border-green-500/30 p-3 text-sm text-green-400">
					<TiTick /> Message sent successfully.
				</div>
			)}

			{status === "failed" && (
				<div className="flex items-center gap-1 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400">
					<IoClose /> Something went wrong. Please try again later.
				</div>
			)}

			<Button className="w-full gap-2 py-6" type="submit">
				{loading ? (
					<LoaderFive text="Loading..." />
				) : (
					<>
						{" "}
						<IoIosSend />
						Send Message
					</>
				)}
			</Button>
		</form>
	);
}
