import './App.css';
import Projects from './Projects';
import { google } from 'googleapis';

const fetchDriveData = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      // Your API credentials here
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      // Scopes for accessing the Drive API
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const fileId = 'YOUR_FILE_ID';

    const response = await drive.files.get({
      fileId: fileId,
      alt: 'media',
    });

    const jsonData = response.data;

    console.log(jsonData);
    // You can set the JSON data to your component state or perform other actions with it
  } catch (error) {
    console.error('Error fetching data from Google Drive:', error);
  }
};

const project1 = {
  name:"name1",
  desc:"desc1",
}

const App = () => {

  useEffect(() => {
    fetchDriveData();
  }, []);

  return (
    <div className='App'>
      <h1>Hello World!!!</h1>
      <Projects project={jsonData} />
    </div>
  );
}

export default App;
