document.addEventListener('DOMContentLoaded', async function() {
    // Function to get query parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the 'id' from the URL query string
    const id = getQueryParam('id');
    if (!id) {
        console.error('ID not found in URL.');
        return;
    }

    try {
        // Initialize the SDK with the extracted id
        const sdk = await new PipedriveAppExtensionsSDK({ identifier: id }).initialize({ size: { height: 500 } });

        // Open a custom modal using the SDK
        const { status } = await sdk.execute(PipedriveAppExtensionsSDK.Command.OPEN_MODAL, {
            type: PipedriveAppExtensionsSDK.Modal.CUSTOM_MODAL,
            action_id: '96882355-b482-4b31-8157-f2516fe6c26d'
        });

        console.log('Modal opened successfully, status:', status);
    } catch (error) {
        console.error('Error initializing SDK or opening modal:', error);
    }
});