const ErrorComponent = ({ message="There was an error", error }) => {
    return (
      <div>
        <p>{message}</p>
        {error && <p>Details: {error.message}</p>}
      </div>
    );
  };

export default ErrorComponent