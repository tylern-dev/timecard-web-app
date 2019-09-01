import React, { useState } from 'react'
import { Grommet, Box, Button, Heading, Collapsible } from 'grommet'
import { Notification, Amex } from 'grommet-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from 'shared/contexts/AuthContext'
import Login from 'routes/Login'


const theme = {
  global: {
    colors: {
      brand: '#228be6'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)



function App() {
  const [showSidebar, setShowSidebar] = useState(true)
  return (
    <Grommet theme={theme}>
      <Box fill >
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />

          Hello Grommet
        </AppBar>

        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          </Collapsible>
          <Box flex align='center' justify='center'>
            <AuthContextProvider>

              <Router>
                <Switch>
                  <Route path='/login' component={Login} />
                </Switch>
              </Router>

            </AuthContextProvider>
          </Box>

        </Box>

      </Box>

    </Grommet>
  )
}

export default App
