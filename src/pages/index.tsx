import Section from '@/comps/Section/Section'
import Row from '@/comps/Row/Row'
import Grid from '@/comps/Grid/Grid'

export default function Home() {
  return (
    <Section>
      <Row>
        <h1>Heading 1 Text</h1>
        <Grid columns={3} template='2fr 1fr 1fr' gap={30} laptop='3fr 2fr 2fr' tablet='1fr 1fr' phone='100%'>
          <div>
            <h2>Heading 2 Text</h2>
          </div>
          <div>
            <h3>Heading 3 Text</h3>
            <p>This is a sample paragraph. This is for testing purposes only and is made to take up space on the screen.</p>
          </div>
          <div>
            <h3>Heading 3 Text</h3>
            <p>This is a sample paragraph. This is for testing purposes only and is made to take up space on the screen.</p>
          </div>
        </Grid>
      </Row>
    </Section>
  )
}
