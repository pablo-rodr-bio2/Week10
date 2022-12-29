import Comment from './components/Comment';
import SubmitComment from './components/SubmitComment';
import { CommentsProvider } from './context/CommentsContext';
import appStyles from './app.module.css'


function App() {

  return (
    <CommentsProvider>
      <div className={appStyles.App}>
        <Comment />
        <br />
        <SubmitComment />
      </div>
    </CommentsProvider>
  );
}

export default App;
