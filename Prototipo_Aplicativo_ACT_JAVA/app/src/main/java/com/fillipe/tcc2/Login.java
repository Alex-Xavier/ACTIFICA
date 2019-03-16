package com.fillipe.tcc2;

import android.app.AlertDialog;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.EditText;

public class Login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }


    public void logar(View view)
    {
        EditText texto= (EditText) findViewById(R.id.editText);
        EditText senha= (EditText) findViewById(R.id.editText2);
        Intent logar = new Intent(this, Janela1.class);
        String nome=texto.toString();
        String logue=senha.toString();
        AlertDialog.Builder alerta = new AlertDialog.Builder(this);
        alerta.setMessage("senha incorreta");

        String aaa="aluno";






        startActivity(logar);
        finish();




    }
}
