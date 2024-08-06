const Loader = () => {
  return (
    <div
      data-testid='loader'
      className='flex justify-center items-center h-screen bg-violet-100 dark:bg-lime-100'
    >
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-violet-800 dark:border-lime-900'></div>
    </div>
  );
};

export default Loader;
