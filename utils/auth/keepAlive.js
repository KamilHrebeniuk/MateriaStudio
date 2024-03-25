export default function keepAlive(token, setToken) {
  function keepAliveInterval() {
    fetch("http://qfgcdwu.cluster027.hosting.ovh.net/api/token_generator.php", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          sessionStorage.setItem("token", JSON.stringify(result?.token));
          sessionStorage.setItem(
            "start_time",
            JSON.stringify(result?.start_time)
          );
          setToken(result?.token);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  if (
    typeof window !== "undefined" &&
    (token === "Initial" ||
      !JSON.parse(window.sessionStorage.getItem("token")) ||
      JSON.parse(window.sessionStorage.getItem("token")).length < 1)
  ) {
    keepAliveInterval();
    setInterval(keepAliveInterval, 900000);
  }
}
