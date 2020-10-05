import React from "react";
import "./sideList.css";
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
// ---------------------
import SideBarItem from '../SideBarItem/SideBarItem';
import { useRecoilValue } from "recoil";
import { idCounterState, rectanglesIdsState } from '../Atoms';


function SideBarList() {
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------

	const counter = useRecoilValue(idCounterState);
	const rectanglesArray = useRecoilValue(rectanglesIdsState);
	console.log("rectanglesArray: ", rectanglesArray);

	return (
		<>
			{counter === 1 ? "" : "" } 
			{counter >= 2 ? <div>{(counter - 1) + " Trengles"} </div> : ""}
			<ul className="sidebar__list">
				{rectanglesArray.map((id) => 
					<SideBarItem key={id} rectangleId={id} />
				)}
			</ul>
		</>
	);
}

export default SideBarList;
