interface EmailTemplateProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export function EmailTemplate({
	name,
	email,
	subject,
	message,
}: EmailTemplateProps) {
	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				backgroundColor: "#f8fafc",
				padding: "24px",
			}}
		>
			<div
				style={{
					maxWidth: "600px",
					margin: "0 auto",
					backgroundColor: "#ffffff",
					borderRadius: "8px",
					padding: "24px",
					border: "1px solid #e5e7eb",
				}}
			>
				<h2 style={{ marginBottom: "16px", color: "#0f172a" }}>
					📩 New Contact Message
				</h2>

				<p style={{ marginBottom: "12px" }}>
					You received a new message from your website contact form.
				</p>

				<hr style={{ margin: "16px 0" }} />

				{/* Details */}
				<table
					width="100%"
					cellPadding="6"
					style={{ fontSize: "14px" }}
				>
					<tbody>
						<tr>
							<td>
								<strong>Name:</strong>
							</td>
							<td>{name}</td>
						</tr>

						<tr>
							<td>
								<strong>Email:</strong>
							</td>
							<td>{email}</td>
						</tr>

						<tr>
							<td>
								<strong>Subject:</strong>
							</td>
							<td>{subject}</td>
						</tr>
					</tbody>
				</table>

				<hr style={{ margin: "16px 0" }} />

				{/* Message */}
				<h4 style={{ marginBottom: "8px" }}>Message</h4>

				<div
					style={{
						backgroundColor: "#f1f5f9",
						padding: "12px",
						borderRadius: "6px",
						whiteSpace: "pre-wrap",
						fontSize: "14px",
					}}
				>
					{message}
				</div>

				<p
					style={{
						marginTop: "24px",
						fontSize: "12px",
						color: "#64748b",
					}}
				>
					Sent from GeekyStory Contact Form
				</p>
			</div>
		</div>
	);
}
