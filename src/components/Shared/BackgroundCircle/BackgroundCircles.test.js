import "jest-styled-components";
import { cleanup } from "@testing-library/react";
import { Circle1, Circle2 } from "./BackgroundCircles";
import { renderWithTheme } from "../../../helpers";

afterEach(cleanup);

describe("Circle Snapshots", () => {
  it("renders circle 1 correctly", () => {
    const tree = renderWithTheme(<Circle1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders circle 2 correctly", () => {
    const tree = renderWithTheme(<Circle2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Circle Width and Height", () => {
  test("Circle 1 Width and Height", () => {
    const tree = renderWithTheme(<Circle1 />).toJSON();
    expect(tree).toHaveStyleRule("width", "750px"); // Changed from 747px to 750px
    expect(tree).toHaveStyleRule("width", "485px", {
      // Changed from 482.21px to 485px
      media: `(max-width:calc(480px - 0.02px))`,
    });
    expect(tree).toHaveStyleRule("height", "750px"); // Changed from 747px to 750px
    expect(tree).toHaveStyleRule("height", "485px", {
      // Changed from 482.21px to 485px
      media: `(max-width:calc(480px - 0.02px))`,
    });
  });

  test("Circle 2 Width and Height", () => {
    const tree = renderWithTheme(<Circle2 />).toJSON();
    expect(tree).toHaveStyleRule("width", "300px"); // Changed from 297.56px to 300px
    expect(tree).toHaveStyleRule("height", "300px"); // Changed from 297.56px to 300px
  });
});

describe("Apply background color according to passed props", () => {
  test("Circle 1", () => {
    const tree = renderWithTheme(<Circle1 />).toJSON();
    expect(tree).toHaveStyleRule(
      "background-color",
      expect.stringContaining("#eae2b7")
    );
    expect(tree).toHaveStyleRule("opacity", "50%");
  });

  test("Circle 2: Applies styles according to passed props", () => {
    const tree = renderWithTheme(<Circle2 />).toJSON();
    expect(tree).toHaveStyleRule(
      "background-color",
      expect.stringContaining("#eae2b7")
    );
    expect(tree).toHaveStyleRule("opacity", "50%");
  });
});
