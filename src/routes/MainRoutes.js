import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
// import { element } from 'prop-types';
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const Profile = Loadable(lazy(() => import('pages/profile')));
const Templates = Loadable(lazy(() => import('pages/templates')));
const PodcastAndShows = Loadable(lazy(() => import('pages/podcastAndShow')));
const Media = Loadable(lazy(() => import('pages/media')));
const Home = Loadable(lazy(() => import('pages/media')));
const AllImages = Loadable(lazy(() => import('pages/media/images')));
const AllVideos = Loadable(lazy(() => import('pages/media/videos')));
const VideoRecorder = Loadable(lazy(() => import('pages/media/recordVideo')));
const ViewMedia = Loadable(lazy(() => import('pages/media/components/viewMedia')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />
    },
    // {
    //   path: 'color',
    //   element: <Color />
    // },
    // {
    //   path: 'dashboard',
    //   element: <DashboardDefault />
    // },
    {
      path: 'media',
      element: <Media />
    },
    {
      path: 'templates',
      element: <Templates />
    },
    {
      path: 'podcastandshow',
      element: <PodcastAndShows />
    },
    {
      path: 'media/images',
      element: <AllImages />
    },
    {
      path: 'media/videos',
      element: <AllVideos />
    },
    {
      path: 'media/recordVideo',
      element: <VideoRecorder />
    },
    {
      path: 'media/:type/view',
      element: <ViewMedia />,
      children: [
        {
          path: ':id',
          element: <ViewMedia />
        }
      ]
    },
    {
      path: 'profile',
      element: <Profile />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
