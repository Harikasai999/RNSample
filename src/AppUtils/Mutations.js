const Mutations = {
    login: async function (loginData) {
        return fetch(
            "https://projects.yellowsoft.in/new_trend/app/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }
        )
            .then(
                response => {
                    // console.log(response, "====")
                    return response.json();
                },

            )
            .catch(error => {
                console.log("Error: ", error);
            });
    },
}
export default Mutations;

