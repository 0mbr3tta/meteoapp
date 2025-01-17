import{Alert, Button} from 'react-bootstrap'
const NotFound = function(){
    return(
        <Alert variant="warning" calssName="text-center">
            <h3> 404  Pagina non trovata, mi dispiace </h3>
            <p>
                Ti sei perso? Lascia che Ombretta ti aiuti, clicca <Button variant="primary">QUI</Button> per tornare alla homepage!
                </p>
        </Alert>
    )
}
export default NotFound