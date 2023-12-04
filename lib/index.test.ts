import {describe, expect, it} from "vitest";
import { perfectAnswer } from "./index"

describe("test", () => {
    it("should pass", () => {
        expect(perfectAnswer()).toBe(42);
    })
})