import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:

    output = req.get_json()
    print(output)
    if(output['id'] == '123' and output['key'] == '1800555'):
        name = "my name jeff"
        print(name)

    if name:
        return func.HttpResponse(f"Hello. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "Failed",
             status_code=200
        )
