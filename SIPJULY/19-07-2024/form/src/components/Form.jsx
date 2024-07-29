import React, { useState } from 'react';
import { ChakraProvider, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';

const Form = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [file, setFile] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleMobileInput = (e) => setMobile(e.target.value);
  const handleFile = (e) => setFile(e.target.value);

  const handleReset = () => {
    setName('');
    setMobile('');
    setFile('');
  };

  const isErrorName = name === '';
  const isErrorMobile = mobile === '';
  const isFile = file === '';

  return (
    <div>
      <ChakraProvider>
        <div className='container'>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form pl-3">
                <h6 className='pt-3'>Students Registration Form</h6><hr />
                <form>
                  <FormControl isInvalid={isErrorName}>
                    <FormLabel fontSize={'15px'}>Name <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='text'
                      name='name'
                      placeholder='Enter Your Name :'
                      value={name} onChange={handleNameChange} 
                    />
                    {!isErrorName ? (
                      <FormHelperText>{name}</FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isErrorMobile}>
                    <FormLabel fontSize={'15px'} mt={4}>Mobile No <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='number'
                      name='number'
                      placeholder='Enter Your Mobile No :'
                      value={mobile} onChange={handleMobileInput} 
                    />
                    {!isErrorMobile ? (
                      <FormHelperText>{mobile}</FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isFile}>
                    <FormLabel fontSize={'15px'} mt={4}>Upload Your Image <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='file'
                      name='file'
                      placeholder='Choose the Image:'
                      pt={1}
                      value={file} onChange={handleFile}
                    />
                    {!isFile ? (
                      <FormHelperText><span style={{color:'green'}}>Uploaded</span></FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-block float-right">
                        <Button 
                          colorScheme='red' 
                          mr={'5px'} 
                          style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} 
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                        <Button 
                          colorScheme='blue' 
                          style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default Form;
