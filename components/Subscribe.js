import { useState } from "react";
import { useMutation } from "@apollo/client";
import { POST_SUBSCRIBE } from "pages/categories/schema";
import { Box, Button, TextField } from "@material-ui/core";


function Subscribe () {
    const [email, setEmail] = useState([]);
    const [message, setMessage] = useState([]);
    const [ subscribe ] = useMutation(POST_SUBSCRIBE);

    const subscribeEmail = async () => {
        const responseData = await subscribe({
          variables: {
            email: email
          }
        })
        
        const { status } = responseData.data.subscribe;
        setMessage(status)
        setEmail('')

        

    }
    return (
      <div style={{display: 'flex', gap: '10px'}}>
        <Box noValidate autoComplete="off">
          <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          value={email}
          onChange={(mail) => setEmail(mail.target.value)} />

          <Button
          type="submit"
          variant="contained"
          fullWidth
          onClick={subscribeEmail}>
            Subscribe
          </Button>
          <br/>

          
          {
            message && message.status === 'Success' ? (
              <p style={{color: 'green'}}> {message.message} </p>
            ) : (
              <p style={{color: 'red'}}> {message.message} </p>
            )
          }
          
        </Box>
      </div>
    )
}

export default Subscribe