import { api } from './api'

function parseFile (file) {
  const reader = new FileReader()
  reader.readAsText(file)
  return new Promise(resolve => {
    reader.onload = (e) => {
      const text = (e.target.result)
      resolve(text)
    }
  })
}

export const sendEmail = async ({ text, html, subject, to, auth }) => {
  const txt = (await parseFile(to.files[0])).replaceAll('\n', ', ')
  return api.post('/email/send', {
    text: text.value, html: html.value, subject: subject.value, to: txt, auth: auth.value
  })
}
