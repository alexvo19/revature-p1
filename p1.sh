#create resource group
az group create --location southcentralus --name myResourceGroup


#create storage account
az storage account create --myStorageAccount -g myResourceGroup \
--access-tier hot --location southcentralus


#create blob storage container
blobStorageAccountKey=$(az storage account keys list -g myResourceGroup \
-n myStorageAccount --query [0].value --output tsv)

az storage container create -n myBlobStorage --account-name myStorageAccount \
--account-key $blobStorageAccountKey

#create appservice plan
az appservice plan create --name myPlan --resource-group myResourceGroup \
--is-linux --location southcentralus --number-of-workers 3 --sku B1


#create web app and links git repo
az webapp create --name myWebApp -g myResourceGroup --plan myPlan -b master \
-u https://github.com/alexvo19/revature-p1


#create cosmos account
az cosmosdb create --name myCosmosAcc -g myResourceGroup


#create database
az cosmosdb database create --name myCosmosAcc -g myResourceGroup \
--db-name myCosmosDB


#create container
az cosmosdb collection create -g myResourceGroup --collection-name myCollection \
--name myCosmosAcc --db-name myCosmosDB

