## [1.1.0] - 2025-07-10

### Added

- ✨ **Prefix Support**: You can now pass a `prefix` option to the plugin to namespace your fade utility classes and avoid class name collisions with other Tailwind plugins or your own utilities.

  **Example:**

  ```js
  plugins: [
    require("@eioluseyi/tailwind-fade")({
      prefix: "eio-",
    }),
  ];
  ```

This would generate utility classes like `eio-fade-x-4` instead of `fade-x-4`.

💡 Tip: Omitting the prefix option will keep class names as-is (e.g., `fade-x-4`, `fade-y-8`).

## [1.0.0] - 2024-12-01

Initial release.

---

[1.1.0]: https://github.com/eioluseyi/tailwind-fade/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/eioluseyi/tailwind-fade/releases/tag/v1.0.0
