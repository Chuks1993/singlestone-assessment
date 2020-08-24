import axios from 'axios'

// const useAxios = (url, setData) => {
//   useEffect(
//     () => {
//       let mounted = true;

//       const loadData = async () => {
//         const result = await axios.get(url);
//         if (mounted) {
//           setData(result.data);
//         }
//       };
//       loadData();

//       return () => {
//         mounted = false;
//       };
//     },
//     [url]
//   );
// };

export async function getSteps() {
	try {
		let response = await axios.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
		return response.data
	} catch (error) {
		console.log(error)
	}
}