/*
This function is formatting the posts
Still working on Back End
*/

export default function Post({ subject, contents, owner }) {
  return (
    <div>
      <p>{subject}</p>
      <p>{contents}</p>
      <p>{owner}</p>
    </div>
  );
}
