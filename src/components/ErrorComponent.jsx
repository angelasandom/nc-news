const ErrorComponent = ({ message }) => {
    return (
      <div>
        <h1>No article found</h1>
        <p>{message}</p>
      </div>
    );
  };

export default ErrorComponent