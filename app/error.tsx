"use client";

interface Props {
  // All these propertie's name should be exactly like this - they are keywords
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      <div>Oups! an error has occured {error.message}</div>;
      <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
