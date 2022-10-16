export default function useToast() {
  const handleCreateToast = ({
    title,
    content,
    type,
  }: {
    title: string;
    content: string;
    type: "info" | "success" | "warn" | "error";
  }) => {
    const div = document.createElement("div");

    const DEFAULT_ANIMATION_APPEAR_MS = 300;
    const DEFAULT_ANIMATION_EXIT_MS = 1500;

    let typeClass = "";
    let icon = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i>`;

    switch (type) {
      case "success":
        typeClass = "text-bg-success";
        break;
      case "error":
        typeClass = "text-bg-danger";
        break;
      case "warn":
        typeClass = "text-bg-info";
        break;
      default:
        typeClass = "text-bg-secondary";
    }

    div.className = `toast-component text-bg-primary ${typeClass}`;
    div.innerHTML = `
      <div class='toast-component__title'>${title}</div>
      <div class='toast-component__content'>${content}</div>
      ${icon}
    `;

    document.querySelector("#toast__wrapper")?.appendChild(div);

    setTimeout(() => {
      document.querySelector("#toast__wrapper")?.removeChild(div);
    }, DEFAULT_ANIMATION_APPEAR_MS + DEFAULT_ANIMATION_EXIT_MS);
  };

  return {
    handleCreateToast,
  };
}
