function ProductDetailsPage(props) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.stock}</p>
        <p>{props.description}</p>
      </div>
      <div>Image</div>
    </div>
  );
};

export default ProductDetailsPage;
