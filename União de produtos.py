import os
import pandas as pd

# Pasta onde estão localizados os arquivos xlsx
pasta_origem = 'C:/BANCOS/180215 - Comercial Moreto Pinceli Ltda(Construção SA)/Dados/Planilhas de Produtos'

# Lista para armazenar todos os DataFrames
dfs = []

# Itera sobre todos os arquivos na pasta de origem
for arquivo in os.listdir(pasta_origem):
    if arquivo.endswith('.xlsx'):
        caminho_arquivo = os.path.join(pasta_origem, arquivo)
        # Lê o arquivo Excel e adiciona o DataFrame à lista
        df = pd.read_excel(caminho_arquivo)
        dfs.append(df)

# Concatena todos os DataFrames da lista em um único DataFrame
df_final = pd.concat(dfs, ignore_index=True)

# Caminho onde será salvo o arquivo CSV
arquivo_csv = 'C:/BANCOS/180215 - Comercial Moreto Pinceli Ltda(Construção SA)/Dados/PRODUTO_UNIDOS.csv'

# Salva o DataFrame concatenado em um arquivo CSV
df_final.to_csv(arquivo_csv, sep=';', index=False)

print(f'Arquivo CSV gerado em: {arquivo_csv}')
