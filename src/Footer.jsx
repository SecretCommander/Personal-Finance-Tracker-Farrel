export default function Footer() {
  return (
    <footer class="bg-white shadow-sm dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://github.com/SecretCommander" class="hover:underline">
            Farrel Ganteng™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#home" class="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#input-data" class="hover:underline me-4 md:me-6">
              Input Data
            </a>
          </li>
          <li>
            <a href="#history" class="hover:underline me-4 md:me-6">
              History / Edit
            </a>
          </li>
          <li>
            <a href="#balance" class="hover:underline me-4 md:me-6">
              Balance
            </a>
          </li>
          <li>
            <a href="#category" class="hover:underline">
              Category
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
