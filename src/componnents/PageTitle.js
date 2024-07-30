
function PageTitle(props) {
    const {
        tuyauAuthorName,
    } = props


    const showName = () => {
        return tuyauAuthorName;
    }

    return (

        <h1 className='App'>
            Auteur: <strong>{showName() !== '' ? showName().toUpperCase() : 
            'Inconnu'}</strong>
        </h1>

    )
}

export default PageTitle;