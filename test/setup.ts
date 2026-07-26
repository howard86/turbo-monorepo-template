import { afterAll, afterEach } from "bun:test";
import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);
afterAll(() => GlobalRegistrator.unregister());
