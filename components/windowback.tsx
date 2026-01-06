"use client";
function WindowBackBtn() {
  return (
    <button
      onClick={() => window.history.back()}
      className="px-24 py-4 text-[2.4rem] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
    >
      Go Back
    </button>
  );
}
export default WindowBackBtn;
