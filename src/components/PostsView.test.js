import { render } from "@testing-library/react";
import PostsView from "./PostsView";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("PostsView", () => {
  test("renders without error", () => {
    render(<PostsView />);
  });

  test("displays loading message when posts are not available", () => {
    const { getByText } = render(<PostsView posts={null} />);
    const loadingMessage = getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  test("displays posts correctly when available", () => {
    const posts = [
      {
        id: 1,
        subject: "Hello guys",
        user: "John Doe",
        created_at: "2023-05-18T10:30:00.000Z",
        contents: "Hi how are you",
      },
      {
        id: 2,
        subject: "Anyone lunch",
        user: "Jane Doe",
        created_at: "2023-05-18T12:30:00.000Z",
        contents: "Proctor lunch anyone",
      },
    ];

    const { getByText } = render(<PostsView posts={posts} />);

    posts.forEach((post) => {
      const subject = getByText(post.subject);
      const user = getByText(`${post.user} -`);
      const createdAt = getByText(post.created_at);
      const contents = getByText(post.contents);

      expect(subject).toBeInTheDocument();
      expect(user).toBeInTheDocument();
      expect(createdAt).toBeInTheDocument();
      expect(contents).toBeInTheDocument();
    });
  });
});
