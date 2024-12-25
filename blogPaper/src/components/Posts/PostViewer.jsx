/* eslint-disable react/prop-types */

const PostViewer = ({ post }) => {
  return (
    <div className="post">
     <h2>{post.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }} // Renderizamos el contenido HTML
      />
      <p>Creado el: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostViewer;
