import { redirect } from "next/navigation";
import { Resend } from "resend";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { EmailTemplate } from "@/components/email-templates/contact";

import { IoIosSend } from "react-icons/io";

const resend = new Resend(process.env.RESEND_API_KEY);
export default function ContactForm() {
	async function submitContact(formData: FormData) {
		"use server";

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const subject = formData.get("subject") as string;
		const message = formData.get("message") as string;

		if (!name || !email || !subject || !message) {
			redirect("/contact?status=failed");
		}
		try {
			const { data, error } = await resend.emails.send({
				from: name + "<contact@geekystory.com>",
				to: "methupaperera48@gmail.com",
				subject: subject,
				react: EmailTemplate({ name, email, subject, message }),
			});

			if (error) {
				console.log(error);
				redirect("/contact?status=failed");
			}

			redirect("/contact?status=success");
		} catch (error) {
			redirect("/contact?status=failed");
		}
	}

	return (
		<form
			action={submitContact}
			className="bg-slate-900 space-y-4 border border-muted/5 p-6 rounded-2xl shadow-[0_0_10px] shadow-primary/20"
		>
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

			<Button className="w-full gap-2" type="submit">
				<IoIosSend />
				Send Message
			</Button>
		</form>
	);
}
