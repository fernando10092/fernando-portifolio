from __future__ import print_function
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException


##################### RECEBENDO VARIAVEL ##############################
# script_python.py
import sys

# Verifica se há pelo menos dois argumentos (nome do script + número)
if len(sys.argv) < 2:
    print("Erro: Número não fornecido.")
    sys.exit(1)

# O segundo argumento é o número a ser manipulado
ass = "EMAIL DO SITE - PORTIFÓLIO FERNANDO"
emailRemet = "fernando10092@gmail.com"
nomeRemet = sys.argv[1]
emailRemet = sys.argv[2]
contEmail = sys.argv[4] #"<html><body><h1>INSERIR O CONTEUDO AQUI </h1></body></html>"
emailDesti = "fernando100@windowslive.com"
nomeDesti = "FERNANDO DE LIMA GOMES"
param = "PARAMENTROS"
assParam = "ASSUNTO PARAMETROS"

# Imprime o resultado
print(f"assunto: {ass}")

########################## FIM RECEBER VARIAVEL #################################

assunto = ass
emailRemetente = emailRemet
nomeRemetente = nomeRemet
emailCopia = "fernando100@windowslive.com"
conteudoEmail = contEmail
emailDestinatario = emailDesti
nomeDestinatario = nomeDesti
parametros = param
assuntoParametro = assParam


configuration = sib_api_v3_sdk.Configuration()
configuration.api_key['api-key'] = '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'

api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))
subject = assunto
sender = {"name":nomeRemetente,"email":emailRemetente}
replyTo = {"name":nomeRemetente,"email":emailCopia}
html_content = conteudoEmail
to = [{"email":emailDestinatario,"name":nomeDestinatario}]
params = {"parameter":parametros,"subject":assuntoParametro}
send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(to=to, html_content=html_content, sender=sender, subject=subject)

try:
    api_response = api_instance.send_transac_email(send_smtp_email)
    print(api_response)
except ApiException as e:
    print("Exception when calling SMTPApi->send_transac_email: %s\n" % e)