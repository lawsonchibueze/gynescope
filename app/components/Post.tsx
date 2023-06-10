interface PostProps {
  id: string;
  content: string;
  title: string;
}

const Post = ({ id, content, title }: PostProps) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Post;
