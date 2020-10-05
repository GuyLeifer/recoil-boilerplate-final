import { atom, atomFamily } from "recoil";

export const canvasBackgroundColorState = atom({
    key: "canvasBackgroundColorState",
    default: "#FFFFFF"
})

export const rectanglesIdsState = atom({
    key: "rectanglesArrayState",
    default: []
})

export const idCounterState = atom({
    key: "idCounterState",
    default: 1
})

export const rectAtomFamily = atomFamily({
	key: "rectAtom",
	default: id => ({
		name: `Rect ${id}`
	})
});
