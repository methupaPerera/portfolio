import BackgroundVideo from "@/components/bg-video";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function Page() {
	return (
		<div className="bg-background-dark">
			<BackgroundVideo />
			
			<div className="relative z-1">
				<PixelatedCanvas
					src="/me.jpeg"
					width={400}
					height={500}
					cellSize={2}
					dotScale={0.9}
					shape="square"
					backgroundColor="#000000"
					dropoutStrength={0.2}
					interactive
					distortionStrength={5}
					distortionRadius={40}
					distortionMode="swirl"
					followSpeed={0.2}
					jitterStrength={4}
					jitterSpeed={4}
					sampleAverage
					tintColor="#FFFFFF"
					tintStrength={0.2}
					className="rounded-xl border border-neutral-800 shadow-lg"
				/>
			</div>
		</div>
	);
}
