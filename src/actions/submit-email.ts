"use server";

import { EmailTemplate } from "@/components/email-templates/contact";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
	const secret = process.env.SECRET_KEY;

	if (!secret) {
		console.log("Missing SECRET_KEY");
		return false;
	}

	const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			secret,
			response: token,
		}),
	});

	const data = (await res.json()) as {
		success: boolean;
		score?: number;
		action?: string;
		"error-codes"?: string[];
	};

	const ok = data.success && (data.score === undefined || data.score >= 0.5);

	if (!ok) console.log("reCAPTCHA failed:", data);
	return ok;
}

export default async function submitContact(formData: FormData) {
	const name = (formData.get("name") ?? "").toString().trim();
	const email = (formData.get("email") ?? "").toString().trim();
	const subject = (formData.get("subject") ?? "").toString().trim();
	const message = (formData.get("message") ?? "").toString().trim();
	const token = (formData.get("token") ?? "").toString();

	if (!name || !email || !subject || !message) {
		redirect("/contact?status=failed");
	}

	if (!token) {
		console.log("No token.");
		redirect("/contact?status=failed");
	}

	const captchaOk = await verifyRecaptcha(token);

	if (!captchaOk) {
		console.log("Captcha failed");
		redirect("/contact?status=failed");
	}

	const { error } = await resend.emails.send({
		from: `${name} <contact@geekystory.com>`,
		to: "methupaperera48@gmail.com",
		subject,
		react: EmailTemplate({ name, email, subject, message }),
	});

	if (error) {
		console.log(error);
		redirect("/contact?status=failed");
	}

	redirect("/contact?status=success");
}
