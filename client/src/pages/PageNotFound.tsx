import MessagePage from '../components/MessagePage'

export default function PageNotFound() {
  return (
    <MessagePage name="404: Page Not Found">
      The page that you requested was not found.
      <br />
      Please verify that the URL is correct and try again.
    </MessagePage>
  )
}
