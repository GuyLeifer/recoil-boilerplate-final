import React from "react";
import "./rectangle.css";
import { useRecoilValue } from "recoil";
import { rectAtomFamily } from "../Atoms";


function Rectangle({ rectangleId }) {

	const rectangleAtom = useRecoilValue(rectAtomFamily(rectangleId));

	return <div className="rect" 
			style={{
				backgroundColor: rectangleAtom.color, 
				width: `${rectangleAtom.width}px`,  
				height: `${rectangleAtom.height}px`}}>
		</div>;
}

export default Rectangle;
