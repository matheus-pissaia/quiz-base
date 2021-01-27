import { Title, BackgroundImage, QuizContainer } from '../styles/pages/Home';
import { Widget, WidgetContent, WidgetHeader } from '../components/Widget/index';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';

import db from '../../db.json';

export default function Home() {
  return (
    <>
      <BackgroundImage backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <WidgetHeader>
              <h1>Hallowen!</h1>
            </WidgetHeader>
            <WidgetContent>
              <p>Lorem Ipsum Dolor Sit Amet...</p>
            </WidgetContent>
          </Widget>

          <Widget>
            <WidgetContent>
              <p>Lorem Ipsum Dolor Sit Amet...</p>
            </WidgetContent>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/matheus-pissaia"/>
      </BackgroundImage>
    </>
  )
}
