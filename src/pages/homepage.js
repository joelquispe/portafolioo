
import { Paper, ThemeProvider } from '@mui/material';
import { React,useState } from 'react';
import baseTheme from '../ui/themes/theme';
import  AppsComponent  from '../components/AppsComponent';
import FooterComponent from '../components/FooterComponent';
import LanguageComponent from '../components/languageComponent';
import ProfileComponent from '../components/ProfileComponent';
import WebsComponent from '../components/websComponents';

export default function HomePage() {
    const [theme,setTheme] = useState(baseTheme);

    return (
    <ThemeProvider theme={theme}>
    <Paper   className='App'>
    <div class="container">
    <ProfileComponent/>
    <hr></hr>
    <LanguageComponent/>
    <hr></hr>
    <AppsComponent />
    <hr></hr>
    <WebsComponent/>
    <FooterComponent/>
        </div>
        </Paper>
        </ThemeProvider>
        
    )
}