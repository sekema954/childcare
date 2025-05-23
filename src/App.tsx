import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import Careers from './pages/careers';
import ReferralsPage from './pages/referrals';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Team from './pages/team';
import Solutions from './pages/solutions';
import Contact from './pages/contact';
import RegisterChildForm from './components/gettingStartedForm';
import FAQ from './pages/FAQ';
import TrackStatus from './pages/track_status';
import Life_company from './pages/life_company';
import Admin_dashbaord from './dashboard/pages/dashboard';
import Kids from './dashboard/pages/kids';
import Employees from './dashboard/pages/employees';
import Post_job from './dashboard/pages/post_job';
import Post_event from './dashboard/pages/post_event';
import Parents from './dashboard/pages/parents';
import Profile from './dashboard/pages/profile';
import Messages from './dashboard/pages/messages';

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

const AppWithRouter = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Conditionally render Navbar and Footer based on the route */}
      {!isDashboard && <Navbar />} {/* Show Navbar on non-dashboard routes */}
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/parents/enrollment' element={<RegisterChildForm />} />
        <Route path='/parents/events' element={<Events />} />
        <Route path='/referrals/submit' element={<ReferralsPage />} />
        <Route path='/referrals/track_status' element={<TrackStatus />} />
        <Route path='/careers/jobs' element={<Careers />} />
        <Route path='/careers/life_company' element={<Life_company />} />
        <Route path='/about/team' element={<Team />} />
        <Route path='/about/solutions' element={<Solutions />} />
        <Route path='/about/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/getting_started' element={<RegisterChildForm />} />

        {/* Dashboard Routes */}
        <Route path='/dashboard/*' element={<Admin_dashbaord />}>
          <Route path="kids" element={<Kids />} />
          <Route path="employees" element={<Employees />} />
          <Route path="jobs" element={<Post_job />} />
          <Route path="events" element={<Post_event />} />
          <Route path="parents" element={<Parents />} />
          <Route path='profile' element={<Profile />}></Route>
          <Route path='messages' element={<Messages />}></Route>
        </Route>
      </Routes>
      {/* Always show Footer */}
      {!isDashboard && <Footer />} {/* Show Footer on non-dashboard routes */}
    </>
  );
}

export default App;
