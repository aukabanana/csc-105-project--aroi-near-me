export const ADMIN_USERNAME = "AroiNearMe";

export function isAdminLoggedIn() {
  return localStorage.getItem("isAdminLoggedIn") === "true";
}

export function getAdminUsername() {
  return localStorage.getItem("adminUsername");
}

export function isAdminUser() {
  return (
    isAdminLoggedIn() &&
    getAdminUsername() === ADMIN_USERNAME
  );
}

export function logoutAdminLocal() {
  localStorage.removeItem("isAdminLoggedIn");
  localStorage.removeItem("adminUsername");
}