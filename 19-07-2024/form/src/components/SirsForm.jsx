import React, {useState} from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'


const FormBySir = () =>{


    const [input, setInput] = useState('')
    const [mobile, setMobile] = useState('')
    const [image,setImage] = useState('')


    const handleInputChange = (e) => setInput(e.target.value)


    const handleMobile = (e) =>{
        setMobile(e.target.value)
    }


    const handleImage = (e) =>{
        setImage(e.target.file)
    }


    const isError = input === ''
    const isErrorMobile = mobile === ''
    const isErrorimage = image === ''


    return(
        <>
            <ChakraProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <div className="form pl-3 pr-3">
                                <h6 className="pt-3">Student Registration Form</h6><hr></hr>
                                <form>
                                    <FormControl isInvalid={isError}>
                                        <FormLabel fontSize={'14px'}>Name <sup style={{color:'red'}}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='text'
                                            name="name"
                                            placeholder="Enter Your Name"
                                            value={input}
                                            onChange={handleInputChange} />
                                        {!isError ? (
                                            <FormHelperText>
                                               
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>


                                    <FormControl isInvalid={isErrorMobile}>
                                        <FormLabel fontSize={'14px'} mt={4}>Mobile Number <sup style={{color:'red'}}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='text'
                                            name="mobile"
                                            placeholder="Enter Your Mobile No."
                                            value={mobile}
                                            onChange={handleMobile} />
                                        {!isErrorMobile ? (
                                            <FormHelperText>
                                               
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>


                                    <FormControl isInvalid={isErrorimage}>
                                        <FormLabel fontSize={'14px'} mt={4}>Image <sup style={{color:'red'}}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='file'
                                            name="image"
                                            placeholder="Enter Your Mobile No."
                                            value={image}
                                            pt={1}
                                            onChange={handleImage} />
                                        {!isErrorimage ? (
                                            <FormHelperText pl={1}>
                                                <span style={{color:'green'}}>Uploaded</span>
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>


                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-block float-right">
                                                <Button colorScheme='red' mr={2} style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>Reset</Button>
                                                <Button colorScheme='blue' style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>Submit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}


export default FormBySir
