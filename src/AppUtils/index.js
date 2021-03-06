
// import Queries from './Queries';
// import Mutations from './Mutations';

// export { Mutations, Queries };

const AppUtils = (api, queryBody, requestType) => {

    let isFormData = false;
    // setLoaderData(true);
    if (queryBody) {
        if (queryBody instanceof FormData) {
            isFormData = true;
        }
    }
    const requestOptions = {
        method: requestType ? requestType.toUpperCase() : queryBody ? 'POST' : 'GET',
        headers: {
            // "Content-Type": 'application/json'
        },

        body: isFormData ? queryBody : JSON.stringify(queryBody),
        // body: JSON.stringify(queryBody),
    };

    if (!isFormData) {
        requestOptions.headers['Content-Type'] = 'application/json';
    }
    // console.log(api, requestOptions);
    return fetch(api, requestOptions)
        .then((response) => response.json()
            .then((response) => {
                // console.log('eresponse', response);
                // setLoaderData(false);
                // if ((response.status && response.status !== 200 && response.status !== 201) || response.errors) {
                //     throw new Error(JSON.stringify(response));
                // } else {
                //     if (response.message) {
                //         alert(response.message);
                //     }
                return Promise.resolve(response);
                // }
            }))
        .catch((error) => {
            console.log('error for api', error);
            // setLoaderData(false);
            if (error.message === 'Failed to fetch') {
                alert('Please check your Internet connection');
            } else {
                let errMsg = typeof error.message === 'string' ? error.message : JSON.parse(error.message);
                errMsg = errMsg.message ? errMsg.message : (typeof errMsg === 'string' ? errMsg : JSON.parse(errMsg));
                switch (+errMsg.status) {
                    case 422: {
                        for (let index = 0; index < errMsg.errors.length; index++) {
                            const element = errMsg.errors[index];
                            alert(element.msg);
                        }
                        break;
                    }
                    case 400: {
                        alert(errMsg.message);
                        break;
                    }
                    case 401: {
                        alert(errMsg.message);
                        break;
                    }
                    default: {
                        alert('Sorry something went wrong');
                    }
                }
            }
        });
};
export default AppUtils;