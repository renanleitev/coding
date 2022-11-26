    # workbook = Workbook(FileFormatType.XLSX)
    # celula = workbook.getWorksheets().get(0).getCells()
    # celula.get("A1").putValue("Certificado")
    # celula.get("B1").putValue("Instituição")
    # celula.get("C1").putValue("Data de Emissão")
    # celula.get("D1").putValue("Código da Credencial")
    # conta = 2
    # for x in lista_org:
    #     for y in x:
    #         indice = 0
    #         celula.get(f"A{conta}").putValue(x[indice])
    #         indice = 1
    #         celula.get(f"B{conta}").putValue(x[indice])
    #         indice = 2
    #         celula.get(f"C{conta}").putValue(x[indice])
    #         indice = 3
    #         celula.get(f"D{conta}").putValue(x[indice])
    #         conta += 1
    # workbook.save("output.xlsx")
    # jpype.shutdownJVM()