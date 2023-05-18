import { render, fireEvent } from "@testing-library/react";
import PostCreator from "./PostCreator";

describe("PostCreator", () => {
  test("renders without error", () => {
    render(<PostCreator />);
  });

  test("updates state when input values change", () => {
    const { getByLabelText } = render(<PostCreator />);
    const subjectInput = getByLabelText("Subject");
    const contentsInput = getByLabelText("Contents");
    const userInput = getByLabelText("Username");

    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(contentsInput, { target: { value: "Test Contents" } });
    fireEvent.change(userInput, { target: { value: "Test User" } });

    expect(subjectInput.value).toBe("Test Subject");
    expect(contentsInput.value).toBe("Test Contents");
    expect(userInput.value).toBe("Test User");
  });

  test("calls finished function with correct data when Post button is clicked", () => {
    const finishedMock = jest.fn();
    const { getByText, getByLabelText } = render(
      <PostCreator finished={finishedMock} />
    );
    const subjectInput = getByLabelText("Subject");
    const contentsInput = getByLabelText("Contents");
    const userInput = getByLabelText("Username");
    const postButton = getByText("Post");

    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(contentsInput, { target: { value: "Test Contents" } });
    fireEvent.change(userInput, { target: { value: "Test User" } });
    fireEvent.click(postButton);

    expect(finishedMock).toHaveBeenCalledWith({
      subject: "Test Subject",
      contents: "Test Contents",
      user: "Test User",
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("calls finished function when Cancel button is clicked", () => {
    const finishedMock = jest.fn();
    const { getByText } = render(<PostCreator finished={finishedMock} />);
    const cancelButton = getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(finishedMock).toHaveBeenCalled();
  });
});
