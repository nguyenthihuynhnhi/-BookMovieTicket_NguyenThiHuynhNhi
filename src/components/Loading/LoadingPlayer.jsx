import { Player, Controls } from "@lottiefiles/react-lottie-player";
import loading from "../../assets/loading/logo_animation.json";
import { useEffect, useState } from "react";

function LoadingPlayer() {
	const [isServer, setIsServer] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsServer(true);
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<div className="fixed z-[1002] w-screen h-screen top-0 left-0 bg-black flex items-center justify-center">
			<div className="">
				<Player autoplay speed={3} loop src={loading} style={{ height: "300px", width: "300px" }}>
					{/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
				</Player>
				{isServer && (
					<div className="container text-center">
						<p className="heading-1">Server đang mở lại, bạn đợi xíu nhé.</p>
						<p className="para-1">Vì server có tính năng sẽ tự động tắt nếu như không có tương tác</p>
					</div>
				)}
			</div>
		</div>
	);
}
export default LoadingPlayer;
