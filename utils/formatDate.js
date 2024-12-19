function formatDate(dateString) {
   return new Date(dateString).toLocaleDateString({
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default formatDate