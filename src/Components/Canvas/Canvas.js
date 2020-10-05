import React from "react";
import "./canvas.css";
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";

import { useRecoilValue } from 'recoil';
import { canvasBackgroundColorState} from '../Atoms';
import { rectanglesIdsState } from '../Atoms';
import Rectangle from '../Rectangle/Rectangle';


function Canvas() {
	// TOUCH THAT IF YOU WANT TO GET KILLED
	useRenderMeter(canvasRenderMeterState);
	// ---------------------------------------------
	const backgroundColor = useRecoilValue(canvasBackgroundColorState);
	const rectanglesArray = useRecoilValue(rectanglesIdsState);

	return (
		<div
			className="canvas"
			id="canvas"
			style={{ backgroundColor: backgroundColor }}>
				{rectanglesArray.map((id) => 
						<Rectangle rectangleId={id}/>
					)}
			</div>
	);
}

export default Canvas;
